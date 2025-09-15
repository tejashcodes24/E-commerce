import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="flex flex-col gap-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
