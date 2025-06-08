import { BaseApi } from './base'
import router from '@/router'
import type { AxiosError } from 'axios'
import { useUserStore } from '@/stores/userStore'
import type { loginPayload, loginResponse, signupFirstStepResponse, singupFirstStep } from '@/types'

class NoAuthApi extends BaseApi {
  public constructor() {
    super(import.meta.env.VITE_API_URL)
    this.instance.interceptors.response.use(this._handleResponse, this._handleError)
  }

  public login = (payload: loginPayload) => this.instance.post<loginResponse>('/auth/login', payload)
  public signup = (payload: singupFirstStep) => this.instance.post<signupFirstStepResponse>('/auth/login', payload)
  // public getList = (): List | any => this.instance.get<List>('List')
  // public getListContent = (id: number): any => this.instance.get<listContent>(`List/${id}`)
  // public createList = (payload: createListPayload): any => this.instance.post<listContent>('List', payload)
  // public deleteListItem = (listId: number, listItemId: number): any => this.instance.delete<listContent>(`List/${listId}/list-item/${listItemId}`)
  // public addListItem = (id: number, payload: createListItem): any => this.instance.post<listContent>(`List/${id}/list-item`, payload)
  // public deleteList = (listId: number): any => this.instance.delete<listContent>(`List/${listId}`)

  protected _handleError = async (error: AxiosError) => {
    const config = error.config
    const userStore = useUserStore()
    console.log(config)
    if (error.response) {
      const { status, data } = error.response
      switch (status) {
        // 500/404/403
        case 401:
          userStore.loading = false
          userStore.error = (data as { message?: string })?.message
          console.log(error);
          return Promise.reject(error)
        default:
          router.push({ name: 'ErrorPage' })
          return Promise.reject(error)
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return Promise.reject(error)
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(error)
    }
  }
}


const noAuthApi: NoAuthApi = new NoAuthApi()

export default noAuthApi
