"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "intro-paris-ai-safety" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI Safety Paris
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            AI Safety Paris is a community of people in Paris working on AI Safety, AI Governance, AI Alignment, and related fields. This page is a resource for anyone interested in working in AI Safety in Paris or meeting the community.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            To get to know the community, the best way is to{" "}
            <a
              href="#book-call"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              book a call with Lucie
            </a>
            , the local AI Safety community builder. She can introduce you to people and invite you to private communication groups and events.
          </p>
        </header>

        <main className="space-y-10">
          {/* Events */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Events</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Public events are announced in:
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>
                •{" "}
                <a
                  href="https://lu.ma/altruismeefficacefrance"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Altruisme Efficace France Events Calendar
                </a>
                <br />
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                  Not all focused on AI Safety, but people in AI Safety regularly go there.
                  I especially recommend the monthly English-speaking meetup
                </span>
              </li>
              <li>
                •{" "}
                <a
                  href="https://lu.ma/CeSIA"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Centre pour la Sécurité de l'IA · Events Calendar
                </a>
              </li>
              <li>
                • The{" "}
                <a
                  href="https://discord.gg/KjZHTyGWjQ"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sûreté de l'IA Discord server
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Notable upcoming events:
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>
                •{" "}
                <a
                  href="https://luma.com/05qscjh1"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Automnales d'Altruisme Efficace France
                </a>{" "}
                Oct 31st to Nov 2nd 2025, a retreat that usually has many local AI researchers.
              </li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 text-sm italic">
              There are lots of private ad-hoc event happening in the AI Safety community. Contact
              me directly for more info.
            </p>
          </section>

          {/* AI Safety Organizations */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI Safety Organizations</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-6">
              Paris has multiple organizations doing work relevant for AI safety. Them being listed here does not represent an endorsement on their part of all the opinions expressed on this site or in the AI safety community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="https://www.securite-ia.fr/en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <Image src="/cesia-logo.svg" alt="Centre pour la Sécurité de l'IA" width={150} height={48} className="h-12 w-auto" />
              </a>
              <a
                href="https://gpai-policy-lab.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-white"
              >
                <Image src="/gpai-logo-dark.png" alt="General-Purpose AI Policy Lab" width={150} height={48} className="h-12 w-auto" />
              </a>
              <a
                href="https://www.safer-ai.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <Image src="/saferai-logo.svg" alt="Safer AI" width={150} height={48} className="h-12 w-auto" />
              </a>
              <a
                href="https://pauseia.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-white"
              >
                <Image src="/pauseia-logo-dark.svg" alt="Pause IA" width={150} height={48} className="h-12 w-auto" />
              </a>
            </div>
          </section>

          {/* Offices */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Offices</h2>
            <p className="text-gray-700 dark:text-gray-300">
              There are now shared AI Safety offices in the north of Paris. We have free desks,
              so feel free to visit for a day or a week! For more info, contact me:{" "}
              <a
                href="mailto:lucie.philippon@proton.me"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                lucie.philippon@proton.me
              </a>
            </p>
          </section>

          {/* Communication */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Communication
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Most of the communication in the community happens by private chats, although there
              are some public channels:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>
                • The #paris and #cause-ai-safety channels in{" "}
                <a
                  href="https://www.altruismeefficacefrance.org/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Altruisme Efficace France
                </a>{" "}
                Slack
              </li>
              <li>
                • The{" "}
                <a
                  href="https://discord.gg/KjZHTyGWjQ"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sûreté de l'IA Discord server
                </a>
                , managed by CeSIA
              </li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
              There is no centralized communication channel for people currently working in AI Safety.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              TODO: create a public group chat
            </p>
          </section>


          {/* More resources */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More resources
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                •{" "}
                <a
                  href="https://docs.google.com/document/d/1qGnp1tc9ilRQeVHub_9VRvpUOCEJ26_VZsQRg9FDGRw/edit?tab=t.0#heading=h.3rbqh72h091y"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Career path: Working in AI policy in France
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="https://docs.google.com/document/d/1VP26Zlp5tVpx0RYWPQdG0mCaMYRUF4p-ZFgt_FA9ows/edit?tab=t.0#heading=h.tg542uvqyvn2"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Career path: Working in Technical AI Safety in France
                </a>
              </li>
            </ul>
          </section>

          {/* Book a call */}
          <section id="book-call" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Book a call with Lucie
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hey! I'm{" "}
              <a
                href="https://www.linkedin.com/in/lucie-lt-philippon/"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lucie
              </a>
              , a former software engineer who's been working in AI policy and community building since 2023. I know most of the people in the Parisian AI Safety community, so I can make introductions and invite you to the private communication groups and private events.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              You're welcome to schedule a call with me any time! We can chat about your career plans, the community, or anything else related to AI Safety in Paris.
            </p>
            <div className="w-full h-[600px]">
              <Cal
                namespace="intro-paris-ai-safety"
                calLink="lucie-philippon/intro-paris-ai-safety"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view" }}
              />
            </div>
          </section>
        </main>

        <footer className="text-center mt-12 text-gray-600 dark:text-gray-400 text-sm space-y-2">
          <p>For feedback on this website, contact Lucie Philippon at lucie.philippon@proton.me</p>
          <p>
            <a
              href="https://docs.google.com/document/d/1pudXgEO4gQ_OvGl_8luk3sR2nS0VEclmfSpUDKXYUIE/edit?tab=t.0"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Doc version
            </a>
            {" • "}
            <a
              href="https://github.com/Aelerinya/aisafety.paris"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
