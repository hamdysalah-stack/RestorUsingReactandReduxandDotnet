import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../model/product";
import { baseQuerywithErrorHandling } from "../../api/baseapi";

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    // baseQuery:fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
     baseQuery:baseQuerywithErrorHandling,
    endpoints: (builder) => ({

        fetchProduct:builder.query<Product[],void>({ 

            query:()=>({url:'Product'})
        }) ,
        fetchProductDetails:builder.query<Product,number>({
            query:(id)=>({url:`Product/${id}`})
        }),
      
    })

});


export const { useFetchProductQuery,useFetchProductDetailsQuery } = catalogApi;
