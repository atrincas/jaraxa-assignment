import { DrugsApiResponse } from '../types'

export class DrugsAPI {
  private static instance: DrugsAPI
  private baseURL = 'https://api.fda.gov/drug/drugsfda.json'

  public static getInstance(): DrugsAPI {
    if (!DrugsAPI.instance) {
      DrugsAPI.instance = new DrugsAPI()
    }
    return DrugsAPI.instance
  }

  public search = async (query: string): Promise<DrugsApiResponse> => {
    let result

    try {
      const response = await fetch(`${this.baseURL}?search=${encodeURIComponent(query)}`)
      result = await response.json()
    } catch (err) {
      console.error(err)
      result = {
        error: {
          code: 'ERROR',
          message: 'Something went wrong. Try again.'
        }
      }
    }

    return result
  }
}

export default DrugsAPI.getInstance()
