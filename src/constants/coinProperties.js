export default [
  {
    key: 'title',
    label: 'Title',
    type: 'individual',
    similarityWeight: 1,
    selectable: false,
    unit: ''
  },
  {
    key: 'production_country',
    label: 'Country',
    type: 'discrete',
    similarityWeight: 0.3,
    selectable: true,
    unit: ''
  },
  {
    key: 'production_region',
    label: 'Region',
    type: 'discrete',
    similarityWeight: 0.6,
    selectable: true,
    unit: ''
  },
  {
    key: 'production_minting_place',
    label: 'Minting Place',
    type: 'discrete',
    similarityWeight: 0.8,
    selectable: true,
    unit: ''
  },
  {
    key: 'subdivision',
    label: 'Period',
    type: 'discrete',
    similarityWeight: 0.3,
    selectable: true,
    unit: ''
  },
  {
    key: 'production_material',
    label: 'Material',
    type: 'discrete',
    similarityWeight: 0.3,
    selectable: true,
    unit: ''
  },
  {
    key: 'weight',
    label: 'Weight',
    type: 'continuous',
    similarityWeight: 0.1,
    grouping: 10,
    selectable: true,
    unit: 'g'
  },
  {
    key: 'diameter',
    label: 'Diameter',
    type: 'continuous',
    similarityWeight: 0.1,
    grouping: 5,
    selectable: true,
    unit: 'mm'
  },
  {
    key: 'date_earliest',
    label: 'Earliest Date',
    type: 'continuous',
    similarityWeight: 0.1,
    grouping: 100,
    selectable: true,
    unit: '',
    labelGenerator: (value) => (
      {
        unit: value === 0 ? '' : (value < 0 ? 'BC' : 'AD'),
        value: value < 0 ? Math.abs(value) : value,
        modifiers: value === 0 ? ['highlight'] : []
      }
    )
  },
  {
    key: 'date_latest',
    label: 'Last Date',
    type: 'continuous',
    similarityWeight: 0.1,
    grouping: 100,
    selectable: true,
    unit: '',
    labelGenerator: (value) => (
      {
        unit: value === 0 ? '' : (value < 0 ? 'BC' : 'AD'),
        value: value < 0 ? Math.abs(value) : value,
        modifiers: value === 0 ? ['highlight'] : []
      }
    )
  }
]