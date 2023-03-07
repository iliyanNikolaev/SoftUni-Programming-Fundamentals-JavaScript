function extractFile(fileLocation) {
    let fileLocationArr = fileLocation.split('\\');

    let nameAndExtension = fileLocationArr.pop();

    let dotIndex = nameAndExtension.lastIndexOf('.');

    let name = nameAndExtension.slice(0, dotIndex)

    let extension = nameAndExtension.slice(dotIndex + 1);


    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')