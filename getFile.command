#!/bin/bash

ext_jpg='*.jpg'
ext_png='*.png'

move_file(){
    beforeDir=$1;
    afterDir=$2;

    cd $beforeDir;

    for fileName in `find . -name "$ext_png"`
    do
    rightName=`echo $fileName | sed -e 's/^..*///'`
    afterFile=$afterDir/$rightName
    cp $fileName $afterFile
    done

    for fileName in `find . -name "$ext_jpg"`
    do
    rightName=`echo $fileName | sed -e 's/^..*///'`
    afterFile=$afterDir/$rightName
    cp $fileName $afterFile
    done
}

move_file $HOME/Downloads $HOME/Downloads/PhotoFrame-darwin-x64/PhotoFrame.app/Contents/Resources/app/PhotoFrame_pic

exit