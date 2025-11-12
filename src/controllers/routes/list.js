import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
  const { region = 'all', season = 'all' } = req.query;

  let routes = await getAllRoutes();

  // --- FILTERING ---
  if (region !== 'all') {
    routes = routes.filter(r => r.region.toLowerCase() === region.toLowerCase());
  }

  if (season !== 'all') {
    routes = routes.filter(r => r.bestSeason.toLowerCase() === season.toLowerCase());
  }

  const regions = await getListOfRegions();
  const seasons = await getListOfSeasons();
  
  res.render('routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons
    });
};