import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
 export const store = configureStore(
    {
        reducer : {
      cart : Slice
        }
    }
)