const states = [
  { name: "Arunachal", emoji: "🏔" },
  { name: "Meghalaya", emoji: "🌿" },
  { name: "Assam", emoji: "🦏" },
  { name: "Manipur", emoji: "🌸" },
  { name: "Mizoram", emoji: "🌲" },
  { name: "Nagaland", emoji: "🛶" },
  { name: "Sikkim", emoji: "🏔" },
  { name: "Tripura", emoji: "⛩" },
];

function StateFilter() {
  return (
    <section className="py-12 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4">
          {states.map((state) => (
            <button
              key={state.name}
              className="flex-shrink-0 bg-surface-container-high text-on-surface-variant px-6 py-3 rounded-full font-medium hover:bg-secondary-container transition-all flex items-center gap-2"
            >
              {state.emoji} {state.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StateFilter;