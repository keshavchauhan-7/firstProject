import React from 'react'
import { View, Button, Alert } from 'react-native'
import { PDFDocument } from 'pdf-lib';
import RNFS from 'react-native-fs';


const Pdf = () => {


    const handleGeneratePDF = async()=> {
        try{
          const pdfDoc= await PDFDocument.create();
          const page =pdfDoc.addPage();
          page.drawText('Hello My PDF!!', {x:50,y:400,size:20});
          const pdfBytes= await pdfDoc.saveAsBase64({dataUri:false});
          const pdfPath= `${RNFS.ExternalDirectoryPath}/test1.pdf`;
          await RNFS.writeFile(pdfPath,pdfBytes,'base64');
          console.log(pdfPath);
          Alert.alert(
            'PDF Generated',
            `PDF saved at ${pdfPath}`,
          );
        } // Try closed here
        catch(error)
        {
          console.log(error);
          Alert.alert(
            'Error',
            'Failed to generate PDF, Try again',
          );
        }
        };

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Generate PDF" onPress={handleGeneratePDF} />
      </View>
    )
  }

export default Pdf;