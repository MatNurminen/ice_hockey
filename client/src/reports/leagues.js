import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

import { getLeagues, moduleName as leaguesModule } from '../store/duck/leagues';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    margin: 12,
    fontSize: 24,
    textAlign: 'center',
  },
  table: {
    display: 'table',
    marginVertical: 2,
    marginHorizontal: 50,
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
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

export class leaguesReport extends Component {
  componentDidMount() {
    this.props.getLeagues();
  }
  render() {
    const { leagues } = this.props;
    if (!leagues) {
      return <h1>WAIT!</h1>;
    }
    return (
      <PDFViewer width='100%' height='800px'>
        <Document>
          <Page size='A4' style={styles.page}>
            <View style={styles.section}>
              <Text>Hello World!</Text>
            </View>
            <View style={styles.section}>
              <Text>Hello World!</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
}

const mapStateToProps = (state) => ({
  leagues: state[leaguesModule].leagues,
});

export default connect(mapStateToProps, { getLeagues })(leaguesReport);

// <Document>
//   <Page size='A4' style={styles.page}>
//     <View style={styles.section}>
//       <Text>Hello World!</Text>
//     </View>
//     <View style={styles.section}>
//       <Text>We're inside a PDF!</Text>
//     </View>
//   </Page>
// </Document>
