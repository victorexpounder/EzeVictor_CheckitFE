import { combineReducers, createSlice} from '@reduxjs/toolkit'

    const initialState =  {
        capsules : null,
        loading : false,
        error : false,
        
    }

    

export const filteredCapsuleSlice =  createSlice({
    name: 'filteredCapsules',
    initialState,
    reducers: {
        addfilter : (state, action) =>{
            state.loading = false;
            state.capsules = action.payload
        },
        editFilteredCapsule: (state, action) => {
            const { serial, updatedData } = action.payload;
            const index = state.capsules.findIndex(capsule => capsule.capsule_serial === serial);
            if (index !== -1) {
              state.capsules[index] = { ...state.capsules[index], ...updatedData };
            }
        }

    }
})

export const {addfilter, editFilteredCapsule} = filteredCapsuleSlice.actions;
export default filteredCapsuleSlice.reducer;