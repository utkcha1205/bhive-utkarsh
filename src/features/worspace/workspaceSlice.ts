import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WorkspaceState = {
  workspace: string | null;
};

const initialState: WorkspaceState = {
    workspace: null,
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setWorkspace(state, action: PayloadAction<string>) {
      state.workspace = action.payload;
    },
    logout(state) {
      state.workspace = null;
    },
  },
});

export const { setWorkspace, logout } = workspaceSlice.actions;
export default workspaceSlice.reducer;
