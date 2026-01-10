import { useState } from "react";

function PageSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    // Find all text nodes in the page
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          if (node.nodeValue.toLowerCase().includes(searchTerm.toLowerCase())) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_REJECT;
        },
      }
    );

    const node = walker.nextNode();
    if (node) {
      const parent = node.parentElement;

      // Scroll to the parent element
      parent.scrollIntoView({ behavior: "smooth", block: "center" });

      // Highlight the matching text
      const regex = new RegExp(`(${searchTerm})`, "gi");
      const originalHTML = parent.innerHTML;
      parent.innerHTML = originalHTML.replace(regex, `<span class="bg-yellow-300">$1</span>`);

      // Remove highlight after 2 seconds
      setTimeout(() => {
        parent.innerHTML = originalHTML;
      }, 2000);
    } else {
      alert(`No match found for "${searchTerm}"`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-4 flex items-center gap-2">
        <input
        type="text"
        placeholder="Search this page..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-700 m-3 p-2 w-full sm:w-1/2 md:w-2/4 lg:w-3/4 rounded-xl"
      />
       <button type="submit" className="text-gray-500">
    {/* Search Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 justify-center items-center " fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
    </svg>
  </button>
    </form>
  );
}

export default PageSearch;
