import React from "react";
import {Image, Text, View, TouchableOpacity} from 'react-native'

import styles from "./styles";

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';

function Landing(){
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>
                    O que deseja fazer?
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.buttomPrimary]}>
                    <Image source={studyIcon} />
                    <Text>Estudar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttomSecondary]}>
                    <Image source={giveClassesIcon} />
                    <Text>Dar Aulas</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Landing;
