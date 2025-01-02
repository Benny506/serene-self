import { configureStore } from '@reduxjs/toolkit'
import appLoadingSlice from './slices/appLoadingSlice'
import alertMsgSlice from './slices/alertMsgSlice'


export default configureStore({
    reducer: {
        appLoadingSlice,
        alertMsgSlice
    }
})