import { fetchBaseQuery, type BaseQueryApi, type FetchArgs } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";
import { toast } from "react-toastify";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
});



    const sleep = ()=> new Promise((resolve)=>setTimeout(resolve,1000));

   export const baseQuerywithErrorHandling = async (args:string|FetchArgs , api:BaseQueryApi, 
        extraOperation:object) => {

            //start Loading
            api.dispatch(startLoading());

        await sleep();
           const result = await customBaseQuery(args,api, extraOperation);

          api.dispatch(stopLoading());
           //stop Loading
              if(result.error){
                //handle error
                // const { status ,data} = result.error;
                // console.log("Error status",status);
                //   console.log("Error data",data);

              const OriginStatus = result.error.status==="PARSING_ERROR" && result.error.originalStatus 
              ? result.error.originalStatus : result.error.status; 
              
              const respnseData = result.error.data;

                switch(OriginStatus){
                  case 400:
                    toast.error(respnseData as string);
                    break;
                  case 401:
                    toast.error("You are not authorized to do this operation" , respnseData as object);  
                    break;

                    case 404:
                      toast.error("The resource you are looking for is not found", respnseData as object);
                      break;
                    case 500:
                      toast.error("Server error - please try again later", respnseData as object);
                      break;
                    default:
                      toast.error("An unexpected error occurred", respnseData as object);
                      break;
                }  
                      

              }

              return result;
   };
