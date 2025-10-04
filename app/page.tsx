export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Parisian AI Safety Community
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-3">
            Last update 2025-06-07 • Built by Lucie Philippon • Sharing policy: Public
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            For the most up-to-date version, see{" "}
            <a
              href="https://docs.google.com/document/d/1pudXgEO4gQ_OvGl_8luk3sR2nS0VEclmfSpUDKXYUIE/edit?tab=t.0"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              this Google Doc
            </a>
          </p>
        </header>

        <main className="space-y-10">
          {/* How to get to know the community */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How to get to know the community?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              <a
                href="mailto:lucie.philippon@proton.me"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Book a call with me!
              </a>{" "}
              (Lucie) I know most of the people in the Parisian AI Safety community, so I can make
              introductions and invite you to the private communication groups and private events.
            </p>
          </section>

          {/* Orgs */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Orgs</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Centre pour la Sécurité de l'IA</li>
              <li>• General-Purpose AI Policy Lab</li>
              <li>• Safer AI</li>
              <li>• PRISM Eval</li>
              <li>• Pause IA</li>
            </ul>
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
              <li>• The #paris channel in Altruisme Efficace France Slack</li>
              <li>• The Sûreté de l'IA Discord server, managed by CeSIA</li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              There is no centralized communication channel for people currently working in AI Safety.
            </p>
          </section>

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
                  href="https://calendar.google.com/calendar/u/0?cid=Y181MTQ3ZmZlMzU5NDQwNjgyYjdmYmI2ZGQ5ZjFhZWYyZmUwN2FhMzQwNjNiNzk5ZmJiNmI1OTdkNTdhZDg3YmQ3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Altruisme Efficace France - Tous les événements · Events Calendar
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
                  href="https://calendar.google.com/calendar/u/0?cid=Y181MTQ3ZmZlMzU5NDQwNjgyYjdmYmI2ZGQ5ZjFhZWYyZmUwN2FhMzQwNjNiNzk5ZmJiNmI1OTdkNTdhZDg3YmQ3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Centre pour la Sécurité de l'IA · Events Calendar
                </a>
              </li>
              <li>• The Sûreté de l'IA Discord server</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Notable upcoming events:
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>• Sommet de l'altruisme efficace 2025 - Paris</li>
              <li>• Automnales d'Altruisme Efficace France Oct 31st to Nov 2nd</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 text-sm italic">
              There are lots of private ad-hoc event happening in the AI Safety community. Contact
              me directly for more info.
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
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Career path: Working in AI policy in France
                </a>
              </li>
              <li>
                •{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Career path: working in technical AI safety in France
                </a>
              </li>
            </ul>
          </section>
        </main>

        <footer className="text-center mt-12 text-gray-600 dark:text-gray-400 text-sm">
          <p>For more information, contact Lucie Philippon at lucie.philippon@proton.me</p>
        </footer>
      </div>
    </div>
  );
}
