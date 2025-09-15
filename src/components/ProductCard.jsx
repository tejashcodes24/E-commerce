import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product }) {
  return (
    <Card className="w-64 rounded-2xl shadow-lg hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-t-2xl"
      />
      <CardContent className="p-4 flex flex-col gap-3">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">₹{product.price}</p>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
