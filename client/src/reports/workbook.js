import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRosters } from '../store/actions/rosterActions';
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

const queryString = require('query-string');

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    width: '30%',
  },
  tableCol: {
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: '2',
    fontSize: 10,
  },
});

export class workBookPlayers extends Component {
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.setState({ year: parsed.year });
    this.season = parsed.year + '-' + (parsed.year - 1999);
    this.props.getRosters(parsed.year, parsed.league);
  }
  render() {
    const { rosters } = this.props;
    if (!rosters) {
      return <h1>WAIT!</h1>;
    }
    return (
      <PDFViewer width='100%' height='800px'>
        <Document>
          <Page style={styles.body}>
            <View style={styles.table}>
              {rosters.map((roster) =>
                roster.pos !== 'G' ? (
                  <View style={styles.tableRow} key={roster.championship_id}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {roster.pos} {'. '} {roster.last_name}
                      </Text>
                    </View>
                  </View>
                ) : null
              )}
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
}

const mapStateToProps = (state) => ({
  rosters: state.rosterReducer.rosters,
});

export default connect(mapStateToProps, { getRosters })(workBookPlayers);
