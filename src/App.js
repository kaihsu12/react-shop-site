import classes from './App.module.css';
import StepProgress from './components/StepProgress';
import InfoOne from './components/InfoOne';
import InfoTwo from './components/InfoTwo';
import InfoThree from './components/InfoThree';
import ProgressControl from './components/ProgressControl';

function App() {
  return (
    <>
      <main className={classes.siteMain}>
        <div className={classes.mainContainer}>
          <StepProgress />
          <InfoOne />
          <InfoTwo />
          <InfoThree />
          <div className={classes.secBorder}></div>
          <ProgressControl />
        </div>
      </main>
    </>
  );
}

export default App;
