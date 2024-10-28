import { combineReducers, createSlice} from '@reduxjs/toolkit'

    const initialState =  {
        capsules : null,
        loading : false,
        error : false,
        
    }

    

export const capsuleSlice =  createSlice({
    name: 'capsules',
    initialState,
    reducers: {
        fetchCapsulesLoading : (state) =>{
            state.loading = true
        },

        fetchCapsulesSuccess : (state, action) =>{
            state.loading = false;
            state.capsules = action.payload
        },

        add : (state, action) =>{
            state.capsules.unshift(action.payload);
        },
        editCapsule: (state, action) => {
            const { serial, updatedData } = action.payload;
            const index = state.capsules.findIndex(capsule => capsule.serial === serial);
            if (index !== -1) {
              state.capsules[index] = { ...state.capsules[index], ...updatedData };
            }
        }

        

        
        
    }
})

export const {fetchCapsulesLoading, fetchCapsulesSuccess, add, editCapsule} = capsuleSlice.actions;
export default capsuleSlice.reducer;