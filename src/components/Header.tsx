import sonaLogo from "../assets/sona.Logo.svg";
import { useState } from "react";

/*I WANT TO CREATE AN EFFECT THAT WHEN THE CURSOR HOVERS THE BUTTON, THE TEXT TRANSFORMS INTO WHITE, AND WHEN THE BUTTON IS SELECTED, THE TEXT REMAINS WHITE AND WE HAVE A GREEN BAR BELOW THE BUTTON TO SIGNAL THAT THE BUTTON IS CHOSEN.
FOR THIS, I NEED TO IMPORT USESTATE TO KEEP TRACK OF THE BUTTON SELECTED
NOW FOR THE GREEN BAR ON THE BOTTOM TO SHOW WHAT TAB IS SELECTED WE NEED TO CREATE A SPAN ONLY IF THE TAB IS ACTIVE*/

function Header() {
    const [activeTab, setActiveTab] = useState<"Sounds" | "Mixes" | null>(null);

    return (
        <header className="w-screen border-b border-[#252a32] h-20 flex items-center">
            <div className="flex items-center margin-auto h-full px-100">
                <img
                    src={sonaLogo}
                    alt="Logo for the sona. website"
                    className="h-15 w-auto"
                />
                <span className="text-[#9299a6] ml-8 border-l border-[#252a32] px-6 h-6">
                    Your ambient workspace
                </span>
                <nav className="h-full flex items-center gap-4">
                    <button
                        className={`relative transition-colors delay-10 duration-500 ease-in-out ${activeTab === "Sounds" ? "text-white" : "text-[#9299a6]"} h-full w-16 hover:cursor-pointer hover:text-white`}
                        onClick={() =>
                            setActiveTab("Sounds")
                        } /*WITH THIS THE ACTIVE TAB BECOMES "Sounds" */
                    >
                        Sounds
                        {activeTab === "Sounds" && (
                            <span className="h-0.5 bg-[#8fd5b4] absolute right-0 left-0 bottom-0" />
                        )}
                    </button>
                    <button
                        className={`relative transition-colors delay-10 duration-500 ease-in-out ${activeTab === "Mixes" ? "text-white" : "text-[#9299a6]"} h-full w-16 hover:cursor-pointer hover:text-white`} /*WHITH THE IF STATEMENT, THE COLOR IS NOW ACTING LIKE WE WANTED */
                        onClick={() =>
                            setActiveTab("Mixes")
                        } /*WITH THIS THE ACTIVE TAB BECOMES "Mixes" */
                    >
                        Mixes
                        {activeTab === "Mixes" && (
                            <span className="absolute right-0 left-0 bottom-0 h-0.5 bg-[#8fd5b4]" />
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
