import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Link
} from "react-router-dom";
import './AppPage.css';
import Typography from '@material-ui/core/Typography';

function AppPage () {
  return (
    <div className='AppContainer'>
      <Link to='/Fitness Calculator' id="PTTestCalculator" style={{textDecoration: 'none', color: 'white'}}>
        <Paper className="Tile" elevation={3}><Typography variant="h6" className="title">Fitness Assessment Calculator</Typography><img src= 'https://wallpapercave.com/wp/wp2497494.jpg' alt="Calculator" /></Paper>
      </Link>
      <Link to='/Documentation' id="Documentation" style={{textDecoration: 'none', color: 'white'}}>
        <Paper className="Tile" elevation={3}><Typography variant="h6" className="title">Fitness Assessment Charts</Typography><img src= 'https://www.illinoisrealtors.org/wp-content/uploads/2018/01/bigstock-chart-background-203062333.jpg' alt="Documents" /></Paper>
      </Link>
      <Link to='/Workout of the Day' style={{textDecoration: 'none', color: 'white'}}>
        <Paper className="Tile" elevation={3}><Typography variant="h6" className="title">Workout of the Day</Typography><img src='https://wallpaperplay.com/walls/full/7/2/2/32755.jpg' alt="Documents" /></Paper>
      </Link>
      <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
        <Paper className="Tile" elevation={3}><Typography variant="h6" className="title">Community News Feed</Typography><img src= 'https://via.placeholder.com/300x200.png?text=Supra%20Fitness' alt="Documents" /></Paper>
      </Link>
      <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
        <Paper className="Tile" elevation={3}><Typography variant="h6" className="title">Custom Workout Planner</Typography><img src= 'https://via.placeholder.com/300x200.png?text=Supra%20Fitness' alt="Documents" /></Paper>
      </Link>
      <Link to='/Official Fitness Test' style={{textDecoration: 'none', color: 'white'}}>
        <Paper className="Tile" elevation={3}><Typography variant="h6" className="title">Official Fitness Assessment</Typography><img src= 'https://media.defense.gov/2014/Jan/22/2002547570/780/780/0/140122-F-GF899-000.JPG' alt="Documents" /></Paper>
      </Link>
      <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
        <Paper className="Tile" elevation={3}><Typography variant="h6" className="title">Motivational Quote of the Day</Typography><img src= 'https://via.placeholder.com/300x200.png?text=Supra%20Fitness' alt="Documents" /></Paper>
      </Link>
      <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
        <Paper className="Tile" elevation={3}><Typography variant="h6" className="title">Event Calendar</Typography><img src= 'https://via.placeholder.com/300x200.png?text=Supra%20Fitness' alt="Documents" /></Paper>
      </Link>
      <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
        <Paper className="Tile" elevation={3}><Typography variant="h6" className="title">PTL Corner</Typography><img src= 'https://via.placeholder.com/300x200.png?text=Supra%20Fitness' alt="Documents" /></Paper>
      </Link>
      <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
        <Paper className="Tile" elevation={3}><Typography variant="h6" className="title">Nutrition Guide & Recommendations</Typography><img src= 'https://via.placeholder.com/300x200.png?text=Supra%20Fitness' alt="Documents" /></Paper>
      </Link>
      <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
        <Paper className="Tile" elevation={3}><Typography variant="h6" className="title">Suggested Playlist</Typography><img src= 'https://via.placeholder.com/300x200.png?text=Supra%20Fitness' alt="Documents" /></Paper>
      </Link>
      <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
        <Paper className="Tile" elevation={3}><Typography variant="h6" className="title">Suggested Workouts</Typography><img src= 'https://via.placeholder.com/300x200.png?text=Supra%20Fitness' alt="Documents" /></Paper>
      </Link>
    </div>
  )
}

export default AppPage;