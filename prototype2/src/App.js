import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const App = () => {

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Dummy
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default App;
