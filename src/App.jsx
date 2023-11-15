import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import CategoryCreate from "./pages/Category/create";
import CategoryEdit from "./pages/Category/edit";
import Middleware from "./middlewares";
import Login from "./pages/Login";
import AdminRoute from "./middlewares/AdminRoute";
import Items from "./pages/Items";
import ItemsCreate from "./pages/Items/create";
import TransactionsCreate from "./pages/Transactions/create";
import Transactions from "./pages/Transactions";
import TransactionsEdit from "./pages/Transactions/edit";
import ItemsEdit from "./pages/Items/edit";
import Users from "./pages/Users";
import UsersCreate from "./pages/Users/create";
import UsersEdit from "./pages/Users/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route
          path="/login"
          element={
            <AdminRoute>
              <Login />
            </AdminRoute>
          }
        />

        <Route
          path="/"
          element={
            <>
              <Middleware />
            </>
          }
        >
          <Route path="/" element={<Dashboard />} />
          {/* Category */}
          <Route path="/category" element={<Category />} />
          <Route path="/category/create" element={<CategoryCreate />} />
          <Route path="/category/edit/:id" element={<CategoryEdit />} />

          {/* Items */}
          <Route path="/items" element={<Items />} />
          <Route path="/items/create" element={<ItemsCreate />} />
          <Route path="/items/edit/:id" element={<ItemsEdit />} />

          {/* Items */}
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/create" element={<TransactionsCreate />} />
          <Route path="/transactions/edit/:id" element={<TransactionsEdit />} />

          {/* Users */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/create" element={<UsersCreate />} />
          <Route path="/users/edit/:id" element={<UsersEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
