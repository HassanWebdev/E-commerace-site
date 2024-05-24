import { createSlice } from '@reduxjs/toolkit';
import Cardio_Data from '../Data_Folder/CardioProduct';
import Weight_Data from '../Data_Folder/WeightProduct';
import Fitness_Data from '../Data_Folder/FitnessProduct';
import Comercial_Product from '../Data_Folder/ComercialProduct';
import Alldata from '../Data_Folder/AllData'

export const dataSlicer = createSlice({
  name: 'Products',
  initialState: {
    Cardio: Cardio_Data,
    Weight: Weight_Data,
    Fitness: Fitness_Data,
    Comercial: Comercial_Product,
    originalData: {
      Cardio: Cardio_Data,
      Weight: Weight_Data,
      Fitness: Fitness_Data,
      Comercial: Comercial_Product,
    },
    Alldata:Alldata,
    filterdata:[]
  },
  reducers: {
    filterItems: (state, action) => {
      const { type, min, max } = action.payload;
      const { originalData } = state;

      switch (type) {
        case 'Cardio':
          state.Cardio = originalData.Cardio.filter(
            (item) => item.price >= min && item.price <= max
          );
          break;
        case 'Weight':
          state.Weight = originalData.Weight.filter((item)=> item.price>=min && item.price <= max);
          break;
        case 'Fitness':
          state.Fitness = originalData.Fitness.filter((item)=> item.price>=min && item.price <= max);
          break;
        case 'Comercial':
          state.Comercial = originalData.Comercial.filter((item)=> item.price>=min && item.price <= max);
          break;
        default:
          state.Cardio = originalData.Cardio;
          state.Weight = originalData.Weight;
          state.Fitness = originalData.Fitness;
          state.Comercial = originalData.Comercial;
          break;
      }
    },
    FilterData:(state,action)=>{
      const search = action.payload.toLowerCase();
      state.filterdata = Alldata.filter((Product)=>{
        return(
          Product.title.toLowerCase().includes(search)
        )
      });
    },
    updateProductQuantity: (state, action) => {
      console.log(action.payload)
    }
  },
});

export const { filterItems,selectProduct,FilterData,updateProductQuantity } = dataSlicer.actions;
export default dataSlicer.reducer;