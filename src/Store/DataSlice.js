import { createSlice } from '@reduxjs/toolkit';
import Cardio_Data from '../Data_Folder/CardioProduct';
import Weight_Data from '../Data_Folder/WeightProduct';
import Fitness_Data from '../Data_Folder/FitnessProduct';
import Comercial_Product from '../Data_Folder/ComercialProduct';
import Alldata from '../Data_Folder/AllData';

export const dataSlicer = createSlice({
  name: 'Products',
  initialState: {
    Cardio: [...Cardio_Data],
    Cardio2: [...Cardio_Data],
    Weight: [...Weight_Data],
    Weight2: [...Weight_Data],
    Fitness: [...Fitness_Data],
    Fitness2: [...Fitness_Data],
    Comercial: [...Comercial_Product],
    Comercial2: [...Comercial_Product],
    Alldata: Alldata,
    filterdata: [],
  },
  reducers: {
    filterItems: (state, action) => {
      const { type, min, max } = action.payload;
      switch (type) {
        case 'Cardio':
          state.Cardio = state.Cardio2.filter(
            (item) => item.price >= min && item.price <= max
          );
          break;
        case 'Weight':
          state.Weight = state.Weight2.filter(
            (item) => item.price >= min && item.price <= max
          );
          break;
        case 'Fitness':
          state.Fitness = state.Fitness2.filter(
            (item) => item.price >= min && item.price <= max
          );
          break;
        case 'Comercial':
          state.Comercial = state.Comercial2.filter(
            (item) => item.price >= min && item.price <= max
          );
          break;
        default:
          null;
          break;
      }
    },
    FilterData: (state, action) => {
      const search = action.payload.toLowerCase();
      state.filterdata = Alldata.filter((Product) => {
        return Product.title.toLowerCase().includes(search);
      });
    },
    updateProductQuantity: (state, action) => {
      const { catagery, id, buy } = action.payload;
      const updatedCategoryData = state[catagery].map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - buy,
          };
        }
        return product;
      });

      state[`${catagery}`] = updatedCategoryData;
      state[`${catagery}2`] = updatedCategoryData;
    },
  },
});

export const { filterItems, selectProduct, FilterData, updateProductQuantity } =
  dataSlicer.actions;
export default dataSlicer.reducer;
