#%%
import pandas as pd
import json

# %%
vals = {
    'BYD_CDC_POD': 'Podíl dětí z SO ORP v bytové nouzi',
    'EXE_EXROD_POD': 'ODHAD: Podíl rodičů (s dětmi v domácnosti) v exekuci ze všech rodičů (dtto) v SO ORP',
    'ZSK_FINE_POD': 'Podíl předčasných ukončení povinné školní docházky (tj. v 7. a v 8. ročníku)',
    'CSI_ZMES_HOD_MEAN': 'Počet zameškaných hodin na žáka',
    'CSI_NEPR_POD': 'Podíl neprospívajících žáků (v %)',
    'LCA4': 'kategorie',
}

#%%
d = pd.read_csv('./scratch/DETI_MAPA_ORP_v07.csv', sep=';', decimal=',', index_col='ORP_KOD')
d = d[list(vals.keys())].to_dict(orient='index')

#%%
with open('./scratch/orp_ruian.json', 'r', encoding='utf-8') as f:
    orp = json.loads(f.read())

# %%
for mesto in orp['objects']['orp_ruian']['geometries']:
    mesto['properties'].update(d[mesto['properties']['orp_kod']])

# %%
with open('./data/data.topojson', 'w', encoding='utf-8') as f:
    f.write(json.dumps(orp, ensure_ascii=False))

# %%
def unp(v):
    return v['properties']
out = pd.DataFrame.from_dict(list(map(unp, orp['objects']['orp_ruian']['geometries'])))

#%%
out.rename(columns=vals, inplace=True)

# %%
lca_cats = {
    1: 'nejlepší',
    2: 'nejhorší',
    3: 'nouze a školní absence',
    4: 'školství mírně zaostává nad relativní ekonomickou rozvinutostí',
}

out.kategorie = out.kategorie.apply(lambda x: lca_cats[x])

# %%
out.to_excel('./scratch/pro_redakci.xlsx', index=False)

# %%
