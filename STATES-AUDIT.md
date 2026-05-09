# States Audit — Designing for Uncertainty

## Screens and missing states

| Screen | Loading | Error | Empty | Notes |
|---|---|---|---|---|
| Dashboard Overview | Blank while data loads | Blank if fetch fails | No empty state handling | Dashboard currently only renders stats after load.
| Orders | Blank while fetching orders | Blank if fetch fails | Blank if orders array is empty | Page renders nothing until orders exist.
| Products | Blank while fetching products | Blank if fetch fails | Blank if products array is empty | Product grid is only rendered when data exists.
| Customers | Blank while fetching customers | Blank if fetch fails | Blank if customers array is empty | Table body remains empty until customers load.

## Loading state plan

For list screens, I will use skeleton cards because they preserve layout and show the shape of the content early. The Orders screen will show 4 skeleton cards matching the visual weight of `OrderCard` using Tailwind classes: `animate-pulse`, `bg-gray-200`, `rounded-3xl`, `shadow-sm`, `border`, `border-gray-100`, `h-6`, `h-4`, `w-2/3`, `w-5/6`, and `grid grid-cols-2 gap-4`.

For the Dashboard, I will use the same reusable skeleton component to show placeholder stat cards and keep the layout stable.

## Error state plan

Each screen will reuse `ErrorMessage` with screen-specific copy and a retry button.

- Dashboard: "We couldn't load dashboard stats. Check your connection and try again."
- Orders: "We couldn't load your orders. Check your connection and try again."
- Products: "We couldn't load the product inventory. Check your connection and try again."
- Customers: "We couldn't load the customer list. Check your connection and try again."

## Empty state plan

Each screen will use `EmptyState` with a clear title, guidance, and a helpful action when appropriate.

- Dashboard: title `Dashboard unavailable`, message `No dashboard metrics are available right now. Try refreshing the page.` action `Reload dashboard`.
- Orders: title `No orders yet`, message `When a customer places an order, it will show up here.` action `Browse inventory`.
- Products: title `No products in inventory`, message `Add new products to start tracking stock and pricing.` action `Refresh list`.
- Customers: title `No customers found`, message `Customer accounts will appear here when they place an order.` action `Refresh customers`.

## Implementation checklist

- [ ] Create `STATES-AUDIT.md` before writing component code
- [ ] Add reusable state components in `src/components/states/`
- [ ] Export components from `src/components/states/index.js`
- [ ] Use Loading → Error → Empty → Data order in each page
- [ ] Apply states to Dashboard, Orders, Products, Customers
- [ ] Keep components reusable via props
