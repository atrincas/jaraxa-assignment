export interface DrugsApiResponse {
  meta?: MetaData
  results?: DrugResult[]
  error?: {
    code: string
    message: string
  }
}

export interface DrugResult {
  submissions: DrugSubmission[]
  application_number: string
  sponsor_name: string
  openfda?: OpenFDA
  products: DrugProduct[]
}

export interface MetaData {
  disclaimer: string
  terms: string
  license: string
  last_updated: string
  results: {
    skip: number
    limit: number
    total: number
  }
}

export interface DrugSubmission {
  submission_type: string
  submission_number: string
  submission_status: string
  submission_status_date: string
}

export interface OpenFDA {
  application_number: string[]
  brand_name: string[]
  generic_name: string[]
  manufacturer_name: string[]
  product_ndc: string[]
  product_type: string[]
  route: string[]
  substance_name: string[]
  rxcui: string[]
  spl_id: string[]
  spl_set_id: string[]
  package_ndc: string[]
  unii: string[]
}

export interface DrugProduct {
  product_number: string
  reference_drug: string
  brand_name: string
  active_ingredients: [
    {
      name: string
      strength: string
    }
  ]
  reference_standard: string
  dosage_form: string
  route: string
  marketing_status:
    | 'Prescription'
    | 'Discontinued'
    | 'None (Tentative Approval)'
    | 'Over-the-counter'
  te_code: string
}

export enum ApiStatus {
  Pending = 'Pending',
  Loading = 'Loading',
  Success = 'Success',
  Error = 'Error'
}
