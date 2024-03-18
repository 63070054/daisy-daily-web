import { useState } from "react";
import MonthScreen from "./MonthScreen";
import StatScreen from './StatScreen';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Month');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container">
      <div className="tab">
        <p
          className={activeTab === 'Month' ? 'active' : ''}
          onClick={() => handleTabClick('Month')}
        >
          Month
        </p>
        <p
          className={activeTab === 'Stat' ? 'active' : ''}
          onClick={() => handleTabClick('Stat')}
        >
          Stat
        </p>
      </div>
      {/* Render content based on activeTab */}
      {activeTab === 'Month' && <MonthScreen />}
      {activeTab === 'Stat' && <StatScreen />}
    </div>
  )
}