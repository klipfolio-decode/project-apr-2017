package com.klipfolio.decode;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by qwei on 2017-03-30.
 */
@RestController
public class RestApiController {

	@RequestMapping("/hello")
	public String hello() throws Exception {
		return "Hello world!";
	}

}
