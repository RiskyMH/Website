import React from "react";
import DiscordIcon from "./icons/discord-icon.svg";
import ExternalIcon from "./icons/external-icon.svg";
import GitHubIcon from "./icons/github-icon.svg";
import SocialDropdown, { DropdownLink } from "./social-dropdown";
import LinkButton from "./link-button";
import MailIcon from "./icons/mail-icon.svg";
import YouTubeIcon from "./icons/youtube-icon.svg";
import TwitterIcon from "./icons/twitter-icon.svg";
import RedditIcon from "./icons/reddit-icon.svg";
import BlueskyIcon from "./icons/bluesky-icon.svg";
import GlobeIcon from "./icons/globe-icon.svg";
import NpmIcon from "./icons/npm-icon.svg";

export const MainCard: React.FC = () => (
  <div
    id="main-card"
    className="z-10 flex flex-col items-center rounded-xl bg-[#2a2a2a] p-4 shadow-md md:flex-row md:p-6 gap-5"
  >
    <picture className="h-32 w-32 rounded-xl bg-[#3a3a3a]">
      <source media="(max-width:600px)" srcSet="/fire_anim_small.webp" />
      <img
        loading="lazy"
        src="/fire_anim.webp"
        alt="🔥 Avatar"
        height={128}
        width={128}
        title="A risky fire..."
        data-from="https://github.com/microsoft/fluentui-emoji/tree/main/assets/Fire"
      />
    </picture>
    <div className="flex flex-col gap-2 sm:mr-2">
      <main className="text-center md:text-left">
        <h1 className="text-3xl font-bold leading-9">RiskyMH</h1>
        <p className="text-[#A6A6A6]">Just a random person on the internet</p>
      </main>
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <div className="flex flex-row gap-2 w-full *:flex-1">
          <LinkButton
            url="https://github.com/RiskyMH"
            text="GitHub"
            Icon={GitHubIcon}
          />
          <LinkButton
            url="https://discord.gg/qK9pfnB3Yv"
            text="Discord Server"
            Icon={DiscordIcon}
          />
          <LinkButton
            url="mailto:michael@riskymh.dev"
            text="Email"
            Icon={MailIcon}
          />
        </div>
        <SocialDropdown>
          <DropdownLink
            key="dropdown-github"
            url="https://github.com/RiskyMH"
            text="GitHub"
            Icon={GitHubIcon}
          />
          <DropdownLink
            key="dropdown-discord"
            url="https://discord.gg/qK9pfnB3Yv"
            text="Discord Server"
            Icon={DiscordIcon}
          />
          <DropdownLink
            key="dropdown-email"
            url="mailto:michael@riskymh.dev"
            text="Email"
            Icon={MailIcon}
          />
          <DropdownLink
            key="dropdown-twitter"
            url="https://x.com/RiskyMH5"
            text="Twitter (X)"
            Icon={TwitterIcon}
          />
          <DropdownLink
            key="dropdown-npm"
            url="https://www.npmjs.com/~riskymh"
            text="NPM"
            Icon={NpmIcon}
          />
          <li key="dropdown-separator" className="py-1"><hr className="border-white/10 border-t" /></li>
          <DropdownLink
            key="dropdown-youtube"
            url="https://youtube.com/@RiskyMH"
            text="YouTube"
            Icon={YouTubeIcon}
          />
          <DropdownLink
            key="dropdown-reddit"
            url="https://reddit.com/user/RiskyMH"
            text="Reddit"
            Icon={RedditIcon}
          />
          <DropdownLink
            key="dropdown-bluesky"
            url="https://bsky.app/profile/riskymh.dev"
            text="Bluesky"
            Icon={BlueskyIcon}
          />
          <DropdownLink
            key="dropdown-website"
            url="https://riskymh.dev"
            text="This Website"
            Icon={GlobeIcon}
          />
        </SocialDropdown>
      </div>
    </div>
  </div>
);

export default MainCard;
