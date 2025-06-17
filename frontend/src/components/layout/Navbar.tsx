"use client"
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar(){
    const {theme, setTheme} = useTheme();
    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b bg-background w-full z-10 fixed">
            <Link href='/'><div className="text-2xl font-bold">Certanova</div></Link>
            <div className="flex items-center gap-4">
                <Button
                variant="outline"
                size="icon"
                onClick={()=>setTheme(theme==="dark"?"light":"dark")}
                >
                    {theme==="dark"?<Sun size={18}/>:<Moon size={18}/>}
                </Button>
                <div className="flex gap-1.5 rounded-[1 rem]">
                    <Link href='/auth/signup'><Button className="hover:bg-gray-600 dark:hover:bg-gray-400">SIGN UP</Button></Link>
                    <Link href='/auth/signin'><Button className="hover:bg-gray-600 dark:hover:bg-gray-400">SIGN IN</Button></Link>
                </div>
            </div>
        </nav>
    );
}