import React from 'react';
import '../style/note.css';
import '../style/music.css'
import Note from './note';
import Inbox from './crypto';
import Music from './music';
import Home from './home';
import RSS from './fluxrss';
import { Memomo ,Routes, Route } from "react-router-dom";

class ColumnRight extends React.Component {
    render() {
      return (
        <div className="column_right">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/note" element={<Note />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/music" element={<Music />} />
            <Route path="/flux-rss" element={<RSS />} />
          </Routes>
        </div>
      );
    }
  }

export default ColumnRight;