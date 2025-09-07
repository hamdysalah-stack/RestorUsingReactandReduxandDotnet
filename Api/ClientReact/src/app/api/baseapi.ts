import { fetchBaseQuery, type BaseQueryApi, type FetchArgs } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
});



    const sleep = ()=> new Promise((resolve)=>setTimeout(resolve,1000));

   export const baseQuerywithErrorHandling = async (_args:string|FetchArgs , _api:BaseQueryApi, 
        _extraOperation:object) => {

            //start Loading
            _api.dispatch(startLoading());

        await sleep();
           const result = await customBaseQuery(_args, _api, _extraOperation);

          _api.dispatch(stopLoading());
           //stop Loading
              if(result.error){
                //handle error
                const { status ,data} = result.error;
                console.log("Error status",status);
                console.log("Error data",data);

              }

              return result;
   };
