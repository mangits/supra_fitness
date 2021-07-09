import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function ResultsTable (props) {
  const classes = useStyles();
  return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                <b>Fitness Test Results</b>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Components</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Pass/Fail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.componentsData.map((component) => (
              <TableRow key={component.name}>
                <TableCell>{component.name}</TableCell>
                <TableCell align="right">{
                (component.name === 'Run') ? 
                `${Math.floor(component.amount/60)}:${component.amount%60}`
                : 
                  component.amount
                  }</TableCell>
                <TableCell align="right">{`${ccyFormat(component.score)} / ${component.total}`}</TableCell>
                <TableCell align="right">{component.result}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Total Points</TableCell>
              <TableCell align="right">{ccyFormat(props.total.score)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell  colSpan={2}>Score Category</TableCell>
              <TableCell align="right">{props.total.result}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default ResultsTable;

// results.push(createRow('Paperclips (Box)', 100, 1.15),
//     createRow('Paper (Case)', 10, 45.99),
//     createRow('Waste Basket', 2, 17.99))