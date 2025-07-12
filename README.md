# 🌐 Backlink Marketplace

A full-featured Backlink Marketplace web application built with React and TypeScript. The application allows users to list their websites and define the backlink-related services they offer, including:

- Guest Posts  
- Link Insertions  
- Homepage Placements  

This project emphasizes pixel-perfect design, scalable state architecture, modular component structure, and a seamless user experience.

---

## 🚀 Features

### 🔹 Website List Page

- Paginated table view for all websites
- Columns include:
  - Website URL  
  - Primary Language  
  - Country  
  - Offers Summary  
  - Actions (e.g., Edit)
- “Add Website” button to create a new listing
- Row click navigates to edit mode with pre-filled form data
- Real-time sync of newly added or edited websites using global state

---

### 🔹 Website Details Page

A multi-section form to add/edit website information and offers.

#### A. Website Details

| Field            | Type                  | Validation             |
|------------------|-----------------------|-------------------------|
| Website          | URL Input             | Required, valid URL     |
| Primary Language | Searchable Dropdown   | Required                |
| Country          | Searchable Dropdown   | Required                |
| Categories       | Multi-select Tags     | Optional                |
| Description      | Textarea              | Required                |

#### B. Offers

##### i. Normal Offers

| Field               | Type         | Validation       |
|---------------------|--------------|------------------|
| Guest Post Price     | Number Input | Non-negative     |
| Link Insertion Price | Number Input | Non-negative     |

##### ii. Grey Niche Offers

Includes 6 predefined niches with the same offer fields.

##### iii. Home Page Offer

| Field       | Type       | Validation       |
|-------------|------------|------------------|
| Price       | Number     | Non-negative     |
| Description | Textarea   | Required         |

#### C. Article Specifications

Includes custom editorial and content-related fields as defined in the design.

---

## 🎨 UI/UX

- Pixel-perfect implementation based on Figma design
- Responsive layout and component styling with Tailwind CSS
- UI components built using [shadcn/ui](https://ui.shadcn.com)
- Smooth form experience with validation and dynamic controls

---

## 🧰 Tech Stack

| Area             | Technology                    |
|------------------|-------------------------------|
| Framework        | React.js                      |
| Language         | TypeScript                    |
| Styling          | Tailwind CSS                  |
| UI Components    | shadcn/ui                     |
| State Management | Zustand                       |
| Form Handling    | React Hook Form               |
| Validation       | Yup                           |
| Routing          | React Router                  |

---
