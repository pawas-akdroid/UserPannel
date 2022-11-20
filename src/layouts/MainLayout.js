import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Sidebar, Navbar,Footer, ThemeSettings} from '../components/index'
import { FiSettings } from 'react-icons/fi';
import { useStateContext } from '../contexts/ContextProvider';
import { Loaders } from '../components/Loading';
import RequireAdmin from '../Middleware/RequireAdmin';

const MainLayout = () => {
    
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  const [loading, setLoading] = useState(true)

  const Loading = ()=>{
    setLoading(false)
  }
  

 
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
    setTimeout(Loading, 2000);

  }, []);
  return (
    loading?
    <>
    <Loaders/>
    </> :
    
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent
            content="Settings"
            position="Top"
          >
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>

          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full mb-10 ">
            <Navbar />
          </div>
          <div className='mt-5' style={{marginTop:"70px"}}>
            {themeSettings && (<ThemeSettings />)}
            <RequireAdmin>
             <Outlet/> 
            </RequireAdmin>
              
          </div>
          <Footer />
        </div>
      </div>
    </div>
    

  )
}

export default MainLayout