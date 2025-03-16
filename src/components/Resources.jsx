import PageTitle from "./PageTitle";
import { resources } from "../ressurser.js";

function Resources({ category }) {
    console.log("All resources:", resources);
    console.log("Selected category:", category);

    const filteredResources = resources.filter(resource => {
      const normalizedCategory = category.trim().toLowerCase();
      const resourceCategory = resource.category.trim().toLowerCase();
  
      console.log(`Sjekker: ${resource.title} (${resourceCategory}) mot kategori: ${normalizedCategory}`);
  
      return (
          resourceCategory === normalizedCategory || 
          (normalizedCategory.includes("sanity") && resourceCategory === "headless-cms")
      );
  });
  
  

    console.log("Filtrerte ressurser:", filteredResources);

    return (
      <div>
        <PageTitle title={category} /> 
        {filteredResources.length > 0 ? (
          <ul>
            {filteredResources.map((resource, index) => (
              <li key={index}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>Finnes ikke ressurser.</p>
        )}
      </div>
    );
}

export default Resources;
