import Navbar from "../components/navbar";
import ServerCard from "../components/servercard";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <>
        <Navbar title="Hello World" />
          <div className="bg-gray-700 flex-grow overflow-y-auto">
            t
            <div className="grid-rows-3 grid-flow-col gap-4 lg:space-y-0 lg:flex lg:flex-row px-6 w-full">
              <ServerCard title="Dawn Horizens" desc="foo" img="main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
              <ServerCard title="ByteClub" desc="Guys, I'm just here to tell you all about why the Morph Set is arguably the best armor set in all of Wynncraft. First of all, you get at least 70 skill points in both agility and defense, which is far more survivability than most mainstream builds can claim to have. Some other perks of the Morph Set are its 6/4 mana regen, very high health (13.5k), and 110% loot and XP bonus. The loot and XP bonus are extremely helpful, as it gives morph a use in XP grinding, such as Glowbulb Cave parties and CUR parties. It can also be used during lootrunning. These uses are further complemented by the set's high survivability, making it the best choice for cost-effective grinding. It also comes with -1 cost in every spell and a minimum of 70 intelligence, meaning that even the most costly spells, like Aura, are only 3 mana. Other builds without reduced spell costs would spec at least 94 skill points into intelligence to achieve the same effect, while with Morph you only need to spec 31 skill points into intelligence. Thats a 67% decrease! Finally, the most valuable trait of the Morph Set is its low cost. Morph Sets can be acquired for as little as 1LE for the entire set! Other builds need several LE for a single item, or even stacks of LE if they are using mythics! I hope that the information I have brought here today has inspired you to use the Morph Set on your next class, or to use it when you get to level 100. Thank you for reading.
" img="main/demo2.png" logo="" ip="byteclub.minehut.gg" />
              
            </div>
            <h2 className="pb-[10000px]">Overly sized div to test sizing</h2>
          {/*footer here*/}
        </div>
    </>
  );
}


//'https://api.mcsrvstat.us/2/dev.baezor.com'
