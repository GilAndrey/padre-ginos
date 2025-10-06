export default async function getPastOrder(orderId) {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(`/api/past-order/${orderId}`);
  const data = await response.json();
  return data;
}
