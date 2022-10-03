import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCustomers: [
    {
      id: "1",
      startDate: 2021.03,
      endDate: 305,
      customer: 3.7,
      impression: 67,
      conversion: 4.3,
      attributeMatches: 33,
      conversionRate: 44,
      avgFrequency: 55,
      timeToConversion: 66,
      director: "https://i.pravatar.cc/30?img=1",
      insight: []
    },
    {
      id: "2",
      startDate: 2021.01,
      endDate: 305,
      customer: 3.7,
      impression: 67,
      conversion: 4.3,
      attributeMatches: 33,
      conversionRate: 44,
      avgFrequency: 55,
      timeToConversion: 66,
      director: "https://i.pravatar.cc/30?img=2",
      insight: []
    },
    {
      id: "3",
      startDate: 2021.02,
      endDate: 305,
      customer: 3.7,
      impression: 67,
      conversion: 4.3,
      attributeMatches: 33,
      conversionRate: 44,
      avgFrequency: 55,
      timeToConversion: 66,
      director: "https://i.pravatar.cc/30?img=3",
      insight: []
    },
    {
      id: "4",
      startDate: 2021.04,
      endDate: 305,
      customer: 3.7,
      impression: 67,
      conversion: 4.3,
      attributeMatches: 33,
      conversionRate: 44,
      avgFrequency: 55,
      timeToConversion: 66,
      director: "https://i.pravatar.cc/30?img=4",
      insight: []
    },
    {
      id: "5",
      startDate: 2021.05,
      endDate: 311,
      customer: 2,
      impression: 57,
      conversion: 2.3,
      attributeMatches: 13,
      conversionRate: 14,
      avgFrequency: 15,
      timeToConversion: 16,
      director: "https://i.pravatar.cc/30?img=5",
      insight: []
    },
    {
      id: "6",
      startDate: 2021.06,
      endDate: 305,
      customer: 3.7,
      impression: 67,
      conversion: 4.3,
      attributeMatches: 33,
      conversionRate: 44,
      avgFrequency: 55,
      timeToConversion: 66,
      director: "https://i.pravatar.cc/30?img=6",
      insight: []
    },
    {
      id: "7",
      startDate: 2021.07,
      endDate: 305,
      customer: 3.7,
      impression: 67,
      conversion: 4.3,
      attributeMatches: 33,
      conversionRate: 44,
      avgFrequency: 55,
      timeToConversion: 66,
      director: "https://i.pravatar.cc/30?img=7",
      insight: []
    },
    {
      id: "8",
      startDate: 2021.08,
      endDate: 305,
      customer: 3.7,
      impression: 67,
      conversion: 4.3,
      attributeMatches: 33,
      conversionRate: 44,
      avgFrequency: 55,
      timeToConversion: 66,
      director: "https://i.pravatar.cc/30?img=8",
      insight: []
    },
    {
      id: "9",
      startDate: 2021.09,
      endDate: 305,
      customer: 3.7,
      impression: 67,
      conversion: 4.3,
      attributeMatches: 33,
      conversionRate: 44,
      avgFrequency: 55,
      timeToConversion: 66,
      director: "https://i.pravatar.cc/30?img=9",
      insight: []
    },
    {
      id: "10",
      startDate: 2021.1,
      endDate: 305,
      customer: 3.7,
      impression: 67,
      conversion: 4.3,
      attributeMatches: 33,
      conversionRate: 44,
      avgFrequency: 55,
      timeToConversion: 66,
      director: "https://i.pravatar.cc/30?img=10",
      insight: []
    }
  ]
};

export const customersDataSlice = createSlice({
  name: "dataCustomers",
  initialState,
  reducers: {
    addInsight: (state, action) => {
      state.dataCustomers.some(customer => {
        if (customer.id === action.payload.id) {
          customer.insight.push(...action.payload.insight);
        }
        return customer.id === action.payload.id;
      });
    }
  }
});

export default customersDataSlice.reducer;
export const { addInsight } = customersDataSlice.actions;
