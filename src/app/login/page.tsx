import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaYahoo } from "react-icons/fa";
import { ModeToggle } from "../components/DarkOrLightMode"
import { Logo } from "@/components/menu/header/Logo"

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
        <div className="  p-2 mx-auto text-center">
            <Logo/>
          </div>
      <div className="space-y-2 text-center">
        <div className="flex items-center justify-center space-x-4">
        <h1 className="text-3xl font-bold">Content de vous revoir!</h1>
        <ModeToggle/>
        </div>
        <p className="text-gray-500 dark:text-gray-400">Connectez vous a votre compte pour continuer</p>
      </div>
      <div className="space-y-4">
        <Button variant="outline" className="w-full">
          <FaGoogle className="mr-2 h-5 w-5" />
          Se connecter avec Google
        </Button>
        <Button variant="outline" className="w-full">
          <FaApple className="mr-2 h-5 w-5" />
          Se connecter avec Apple
        </Button>
        <Button variant="outline" className="w-full">
          <FaYahoo className="mr-2 h-5 w-5" />
          Se connecter avec Yahoo
        </Button>
        <Separator className="my-4" />
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Connexion
        </Button>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Pas de compte?{" "}
          <Link href="#" className="font-medium underline" prefetch={false}>
            Créer un compte
          </Link>
        </div>
      </div>
    </div>
  )
}

