export const productsTableHeaders = [
  {
    label: 'Product Number',
    description:
      'A product number is assigned to each drug product associated with an NDA (New Drug Application), ANDA (Abbreviated New Drug Application) and Biologic License Application (BLA) .  If a drug product is available in multiple strengths, there are multiple product numbers.'
  },
  {
    label: 'Brand',
    description: 'Brand or trade name of the drug product.'
  },
  {
    label: 'Marketing Status',
    description: 'Indicates how a drug product is sold in the United States.'
  },
  {
    label: 'Active Ingredients',
    description:
      'The names of the active, medicinal ingredients in the drug product. The strength of the active, medicinal ingredients in the drug product.'
  },
  {
    label: 'Dosage Form',
    description:
      'The drug’s dosage form. There is no standard, but values may include terms like `tablet` or `solution for injection`.'
  }
]
export const submissionsTableHeaders = [
  {
    label: 'Number',
    description: 'A unique identifier for each submission under that application.'
  },
  {
    label: 'Type',
    description: 'The code indicating the submission property type.'
  },
  {
    label: 'Status',
    description: 'The current status of this submission.'
  },
  {
    label: 'Status Date',
    description: 'The date the status was applied to the submission.'
  },
  {
    label: 'Class Code',
    description:
      'The Submission Classification Code, previously known as the Chemistry Classification Code, is assigned as a “Type” code.'
  },
  {
    label: 'Class Code Description',
    description:
      'The Submission Classification Code, previously known as the Chemistry Classification Code, is assigned as a “Type” code. This is a full description of the classification code.'
  },

  {
    label: 'Application Docs'
  },
  {
    label: 'Public Notes',
    description: 'Publicly available notes regarding the submission.'
  }
]

// returns format dd-mm-yyyy
export const getDate = (value: string) => {
  return `${value.substring(6, 8)}-${value.substring(4, 6)}-${value.substring(0, 4)}`
}
