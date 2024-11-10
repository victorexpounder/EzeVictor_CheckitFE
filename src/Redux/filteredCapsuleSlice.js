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
        },
        resetF : (state, action) =>{
            state.capsules = action.payload
            state.loading = false;
            state.error = false
        }

    }
})

export const {addfilter, editFilteredCapsule, resetF} = filteredCapsuleSlice.actions;
export default filteredCapsuleSlice.reducer;