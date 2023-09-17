import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { response } from '../../utilities/types'

export const dogApi = createApi({
  reducerPath: 'dogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/api/' }), //base url
  endpoints: (builder) => ({
    randomDog: builder.query<response, string>({
      query: () => 'breeds/image/random/20',
    }),
    listaRazze: builder.query<response, any>({
          query: () => 'breeds/list/all',
        }),
    cercaInBaseLaRazza: builder.query<response, string>({
        query: (razza:string) => `breed/${razza}/images/random/30` ,
        
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRandomDogQuery, useListaRazzeQuery, useCercaInBaseLaRazzaQuery } = dogApi