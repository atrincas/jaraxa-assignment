import { DrugsApiResponse } from '../types'
import { DEFAULT_RESULTS_LIMIT } from './constants'

export class DrugsAPI {
  private static instance: DrugsAPI
  private baseURL = 'https://api.fda.gov/drug/drugsfda.json'

  public static getInstance(): DrugsAPI {
    if (!DrugsAPI.instance) {
      DrugsAPI.instance = new DrugsAPI()
    }
    return DrugsAPI.instance
  }

  public search = async (query: string, skip?: number): Promise<DrugsApiResponse> => {
    let result

    try {
      const url = `${this.baseURL}?search=${encodeURIComponent(
        query
      )}&limit=${DEFAULT_RESULTS_LIMIT}${skip ? `&skip=${skip}` : ''}`
      const response = await fetch(url)
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
