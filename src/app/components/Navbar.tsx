import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

function Navbar(){
    return(
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
          <Link className="uppercase font-bold text-md h-12 flex items-center"
          href="/">
            Next-store
          </Link>
          <div className="flex items-center gap-8">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                Entrar
              </SignInButton>
            </SignedOut>
          </div>
        </nav>

    )
}

export default Navbar;