package com.ino_h.languagememo;

import org.apache.cordova.DroidGap;
import android.os.Bundle;

public class LanguageMemoActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/index.html");
	}

}
